import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      console.log(user);
      if (error) return setErrorText(error.statusText);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return <userprofile>
    <h1 id="profile-name" >{profileUsername}</h1>
    <img id="pfp" src="https://th.bing.com/th/id/R.0f58f19c3986e66505d8a7ddd6230e84?rik=dRs98PMLxIh0lg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fmystery-man-silhouette%2fmystery-man-silhouette-9.png&ehk=UEAkPBtXYeWkK2TmXPiBBko8Qa0bYvkT4Y7hmKY5S2E%3d&risl=&pid=ImgRaw&r=0"></img>


    {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }
    { !!isCurrentUserProfile && <button id="logout-button" onClick={handleLogout}>Log Out</button> }
  </userprofile>;
}
