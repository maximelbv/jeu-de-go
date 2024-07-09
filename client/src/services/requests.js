import axios from "axios";

const serverUrl = 'http://localhost:8000/';


/**
 * Retrieves all problems from the database.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
export async function getAllProblems() {
    try {
      const response = await axios.get(`${serverUrl + "problems/"}`);
      return response;
    } catch (error) {
      throw error;
    }
}

/**
 * Retrieves all problems to validate from the database.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
export async function getAllProblemsToValidate() {
    try {
      const response = await axios.get(`${serverUrl + "problems/to/validate/"}`);
      return response;
    } catch (error) {
      throw error;
    }
}

/**
 * Delete the selected problem to validate from the database.
 * @param {string} id - The ID of the problem to validate the admin wants to delete.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
export async function deleteProblemToValidate(id) {
    try {
      const response = await axios.delete(
        `${serverUrl + "/problem/to/validate/" + id + "/"}`
      );
      return response;
    } catch (error) {
      throw error;
    }
}

/**
 * Add problem to the database.
 * @param {Object} problem - The JSON object which contains the problem to add datas.
 * @returns {Promise} - A promise that resolves to the server response.
 * @throws {Error} - If an error occurs during the API request.
 */
export async function addProblem(problem) {
    let problemDatas = {
        "title": problem.title,
        "black_chip_positions": problem.black_chip_positions,
        "white_chip_positions": problem.white_chip_positions,
        "solution": problem.solution,  
    }

    try {
      const response = await axios.post(
        `${serverUrl + "/problems/"}`, problemDatas
      );
      return response;
    } catch (error) {
      throw error;
    }
}

export async function register(email, password, confirmPassword){
  let userDatas = {
      "email": email,
      "password": password,
      "password2": confirmPassword
    };
    
    try {
      const response = await axios.post(
        `${serverUrl + "/register/"}`, userDatas
      );

      localStorage.setItem('is_admin', response.data.is_admin);
      return response;
    } catch (error) {
      throw error;
    }
}

export async function login(email, password){
  let userDatas = {
      "email": email,
      "password": password,
    };
    
    try {
      const response = await axios.post(
        `${serverUrl + "/login/"}`, userDatas
      );
      
      localStorage.setItem('is_admin', response.data.is_admin);
      return response;
    } catch (error) {
      throw error;
    }
}

export async function submitProblemsToValidate(datas){
  let problemsDatas = {
    "black_chip_positions": datas.black_chip_positions, 
    "white_chip_positions": datas.white_chip_positions,
    "title": datas.title, 
    "solution": datas.solution
  };

  try {
    const response = await axios.post(
      `${serverUrl + "/problems/to/validate/"}`, problemsDatas
    );
    return response;
  } catch (error) {
    throw error;
  }
}