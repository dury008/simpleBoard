<template>
  <div class="container">
    <h1 style="text-align: left; padding-top: 30px">게시글 생성</h1>
    <hr />
    <div class="mb-2 row">
      <label for="title" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="title" v-model="title" />
      </div>
    </div>
    <hr />
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
import { saveUpdateBoard } from '@/api/data';
export default {
  created() {
    this.boardType = this.$route.query.type;
  },
  data() {
    return {
      title: '',
      contents: '',
      boardType: '',
    };
  },
  methods: {
    cancel() {
      const boardType = this.$route.query.type;
      if (boardType == 'COMMUNITY') this.$router.push({ path: `/main` });
      else if (boardType == 'NOTICE') this.$router.push({ path: `/notice` });
      else if (boardType == 'FAQ') this.$router.push({ path: `/faq` });
      else if (boardType == 'INQUIRY') this.$router.push({ path: `/inquiry` });
      else this.$router.push({ path: `/main` });
    },
    async save() {
      if (this.title == '' || this.contents == '' || this.boardType == '') {
        return this.$swal('제목,종류,내용 모두 채우세요');
      }
      try {
        const { data } = await saveUpdateBoard({
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
