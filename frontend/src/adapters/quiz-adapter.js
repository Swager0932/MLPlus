import { fetchHandler, getPatchOptions } from "../utils";

const baseUrl = '/api/quiz/';


export const getAllQuizzes = async () => {
  const [quiz, error] = await fetchHandler(baseUrl);
  console.log(error); // just logging errors here for simplicity
  return quiz || [];
};

export const getQuiz = async (id) => fetchHandler(`${baseUrl} ${id}`);

// export const updateUsername = async ({ id, username }) => (
//   fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
// );
