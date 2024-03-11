import axios from "axios"
const baseUrl = 'http://localhost:3000/claudiainbytes2024/json/system.json'

const getAllSystemData = async () => {
  return await axios.get(baseUrl).then((response) => response.data)
}

const getSectionSystemData = async (name) => {
  return await axios.get(baseUrl).then((response) => response.data.sections.find(r => r.name === name))
}

export default { getAllSystemData, getSectionSystemData }