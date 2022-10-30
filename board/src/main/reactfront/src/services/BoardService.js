import axios from "axios";

const BOARD_API_BASE_URL = "http://localhost:8080/api/v1/board";

class BoardService{
    saveBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }
}

export default new BoardService();