import  axios  from "axios";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const baseUrl = 'http://10.0.2.2:8080'

const t = "t"

export async function getAllTasks() {
  try {    
    return await axios.get(`${baseUrl}/task/getAllTasks`)
  } catch (error) {
    console.log('Erro:',error);
  }
}
