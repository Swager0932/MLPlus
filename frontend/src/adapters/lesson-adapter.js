import { fetchHandler, getPatchOptions } from "../utils";

const baseUrl = '/api/lessons/';


export const getAllLessons = async () => {
  const [lessons, error] = await fetchHandler(baseUrl);
  console.log(error); // just logging errors here for simplicity
  return lessons || [];
};

export const getLesson = async (id) => fetchHandler(`${baseUrl} ${id}`);

// export const updateUsername = async ({ id, username }) => (
//   fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
// );
