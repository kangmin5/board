import axios from "axios";

const BOARD_API_BASE_URL = "http://localhost:8080/api/v1/board";

class BoardService{
    saveBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    deleteBoard(id) {
        return axios.delete(BOARD_API_BASE_URL + "/" + id);
    }
}

export default new BoardService();