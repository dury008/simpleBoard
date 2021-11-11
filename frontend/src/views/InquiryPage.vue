<template>
  <div class="container">
    <h1 style="text-align: left; padding-top: 30px">1:1 문의</h1>
    <div class="input-group rounded w-25 float-end">
      <input
        type="text"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        v-model="keyword"
      />
    </div>
    <table class="table table-hover table-secondary">
      <thead>
        <tr>
          <th style="width: 5%" scope="col">#</th>
          <th style="width: 10%" scope="col">종류</th>
          <th style="width: 60%" scope="col">제목</th>
          <th style="width: 20%" scope="col">게시일</th>
          <th style="width: 5%" scope="col">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(board, i) in boardList"
          :key="i"
          @click="boardDetail(board.boardSeq)"
        >
          <th scope="row">{{ board.boardSeq }}</th>
          <td>{{ board.boardType.label }}</td>
          <td>{{ board.title }}</td>
          <td>{{ convert(board.regDate / 1000) }}</td>
          <td>{{ board.viewCount }}</td>
        </tr>
      </tbody>
    </table>
    <div class="float-end">
      <button
        type="button"
        class="btn btn-primary me-2"
        @click="gotoCreatePage"
      >
        생성
      </button>
    </div>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { unix_to_date } from '@/utils/timeconvert';
import { getboardList } from '@/api/data';
export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      boardList: [],
      isLoading: false,
      keyword: '',
    };
  },
  watch: {
    keyword: async function () {
      try {
        this.isLoading = true;
        const {
          data: { data },
        } = await getboardList({
          boardTypes: 'INQUIRY',
          size: 1000,
          keyword: this.keyword,
        });
        this.isLoading = false;
        console.log(data);
        this.boardList = data;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const {
          data: { data },
        } = await getboardList({ boardTypes: 'INQUIRY', size: 1000 });
        this.isLoading = false;
        console.log(data);
        this.boardList = data;
      } catch (error) {
        console.log(error.response);
      }
    },
    boardDetail(id) {
      this.$router.push({ path: `/detail/${id}` });
    },
    convert(t) {
      return unix_to_date(t);
    },
    gotoCreatePage() {
      this.$router.push({ path: '/create', query: { type: 'INQUIRY' } });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
