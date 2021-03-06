import $api from "../http";


export default class boardService {


  static async createBoard(userID, name){
    return (await $api.post('/board/create', {userID, name})).data[0]
  }

  //For Future (Corp Accounts)
  static async getBoards(userID){
    return (await $api.get(`/board/getall/${userID}`)).data
  }


  static async getBoardByUserID(userID){
    return (await $api.get(`/board/get/${userID}`)).data[0]
  }
}

