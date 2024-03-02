import axios from "axios"
const baseUrl = 'http://localhost:3000/claudiainbytes2024/json/data.json'

const getAllData = async () => {
  return await axios.get(baseUrl).then((response) => response.data)
}

const getSectionData = async (name) => {
  return await axios.get(baseUrl).then((response) => response.data.sections.find(r => r.name === name))
}

export default { getAllData, getSectionData }