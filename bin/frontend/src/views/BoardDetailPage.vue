<template>
  <div class="container">
    <h1 style="text-align: left; padding-top: 30px">게시글</h1>
    <hr />
    <div class="mb-2 row">
      <label for="title" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="title"
          v-model="board.title"
        />
      </div>
    </div>
    <hr />
    <div class="mb-3 row">
      <label for="date" class="col-sm-2 col-form-label">게시일</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="date"
          v-model="regDate"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="boardtype" class="col-sm-2 col-form-label">종류</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="boardtype"
          v-model="label"
        />
      </div>
    </div>
    <div class="mb-3 row">
      <label for="contents" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <div
          id="contents"
          class="editable"
          contenteditable="false"
          v-html="board.contents"
        ></div>
      </div>
    </div>
    <div class="mb-3 row">
      <label for="viewcount" class="col-sm-2 col-form-label">조회수</label>
      <div class="col-sm-10">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="viewcount"
          v-model="board.viewCount"
        />
      </div>
    </div>
    <div class="float-end">
      <button type="button" class="btn btn-primary me-2" @click="boardEdit">
        수정
      </button>
      <button type="button" class="btn btn-danger" @click="boardDelete">
        삭제
      </button>
    </div>
    <hr />
  </div>
</template>

<script>
import { getboard, deleteBoard } from '@/api/data';
import { unix_to_date } from '@/utils/timeconvert';
export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      board: {},
      label: '',
      regDate: '',
    };
  },
  methods: {
    async fetchData() {
      try {
        const id = this.$route.params.id;
        const { data } = await getboard(id);
        if (data.data == null) {
          this.$swal(data.message);
          this.$router.push({ path: '/main' });
        }
        console.log(data.data);
        this.regDate = unix_to_date(data.data.regDate / 1000);
        this.label = data.data.boardType.label;
        this.board = data.data;
      } catch (error) {
        console.log(error.response);
      }
    },
    boardEdit() {
      const id = this.$route.params.id;
      this.$router.push({ path: `/edit/${id}` });
    },
    async boardDelete() {
      try {
        const id = this.$route.params.id;
        const { data } = await deleteBoard(id);
        console.log(data);
        this.$swal(data.message);
        this.$router.push({ path: '/main' });
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>

<style scoped>
div.editable {
  text-align: left;
  width: 100%;
  height: 300px;
  border: 1px solid #dcdcdc;
  overflow-y: auto;
}
</style>
