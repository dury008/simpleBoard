<template>
  <div class="container">
    <h1 style="text-align: left; padding-top: 30px">게시글 수정</h1>
    <hr />
    <div class="mb-2 row">
      <label for="title" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="title" v-model="title" />
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
        <select class="boardtype form-select" v-model="boardType">
          <option value="COMMUNITY">자유게시판</option>
          <option value="NOTICE">공지사항</option>
          <option value="FAQ">자주묻는 질문</option>
          <option value="INQUIRY">1:1문의</option>
        </select>
      </div>
    </div>
    <div class="mb-3 row">
      <label for="contents" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <ckeditor class="contents" v-model="contents"></ckeditor>
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
      <button type="button" class="btn btn-warning me-2" @click="cancel">
        취소
      </button>
      <button type="button" class="btn btn-primary me-2" @click="save">
        저장
      </button>
    </div>
    <hr />
  </div>
</template>

<script>
import { getboard, saveUpdateBoard } from '@/api/data';
import { unix_to_date } from '@/utils/timeconvert';
export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      board: {},
      regDate: '',
      title: '',
      contents: '',
      boardType: '',
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
        this.title = data.data.title;
        this.contents = data.data.contents;
        this.boardType = data.data.boardType.code;
        this.board = data.data;
      } catch (error) {
        console.log(error.response);
      }
    },
    cancel() {
      const id = this.$route.params.id;
      this.$router.push({ path: `/detail/${id}` });
    },
    async save() {
      try {
        const boardSeq = this.$route.params.id;
        const { data } = await saveUpdateBoard({
          boardSeq: boardSeq,
          boardType: this.boardType,
          title: this.title,
          contents: this.contents,
        });
        console.log(data);
        this.$swal(data.message);
        this.cancel();
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>

<style></style>
