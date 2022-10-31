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

    getBoardsById(id) {
        return axios.get(BOARD_API_BASE_URL + "/" + id);
    }
    updateBoard(id, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + id, board);
    }
}

export default new BoardService();