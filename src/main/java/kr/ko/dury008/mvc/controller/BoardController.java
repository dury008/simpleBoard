package kr.ko.dury008.mvc.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import kr.ko.dury008.configuration.exception.BaseException;
import kr.ko.dury008.configuration.http.BaseResponse;
import kr.ko.dury008.configuration.http.BaseResponseCode;
import kr.ko.dury008.framework.data.domain.MySQLPageRequest;
import kr.ko.dury008.framework.data.domain.PageRequestParameter;
import kr.ko.dury008.mvc.domain.Board;
import kr.ko.dury008.mvc.parameter.BoardParameter;
import kr.ko.dury008.mvc.parameter.BoardSearchParameter;
import kr.ko.dury008.mvc.service.BoardService;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/board")
public class BoardController { //게시판 컨트롤러
	Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired //스프링 컨테이너에서 관리하는 빈을 주입
	private BoardService service;
	
	@GetMapping
	@ApiOperation(value = "게시물 전체데이터", notes = "게시물 전체 데이터를 가져옵니다")
	public BaseResponse<List<Board>> list(
			BoardSearchParameter parameter,
			MySQLPageRequest pageRequest) {
		logger.info("pageRequest : {}", pageRequest);
		logger.info("parameter : {}", parameter);
		PageRequestParameter<BoardSearchParameter> pageRequestParameter = new PageRequestParameter<BoardSearchParameter>(pageRequest, parameter);
		List<Board> boardList = service.getList(pageRequestParameter);
		return new BaseResponse<List<Board>>(boardList);
	}
	
	
	@GetMapping("/{boardSeq}") //상세페이지
	@ApiOperation(value = "게시물 상세데이터", notes = "게시물 상세 데이터를 가져옵니다")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "boardSeq", value = "게시물 번호", example = "1"),
	})
	public BaseResponse<Board> get(@PathVariable int boardSeq) {
		service.viewCountUpdate(boardSeq);
		Board board = service.get(boardSeq);
		if (board == null) {
			throw new BaseException(BaseResponseCode.DATA_IS_NULL, new String[] { "게시물" });
		}
		return new BaseResponse<Board>(board);
		}
	
	

	
	
	@PostMapping //등록,수정처리
	@ApiOperation(value = "등록 / 수정처리", notes = "신규 게시물 저장 및 기존 게시물 업데이트가 가능합니다.")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "boardSeq", value = "게시물 번호", example = "1"),
		@ApiImplicitParam(name = "title", value = "제목", example = "spring"),
		@ApiImplicitParam(name = "contents", value = "내용", example = "spring 강좌")
	})
	public BaseResponse<Integer> save(@RequestBody BoardParameter parameter) {
		if(StringUtils.isEmpty(parameter.getTitle())) {// 제목 null 체크
			throw new BaseException(BaseResponseCode.VALIDATE_REQUIRED, new String[] { "title", "제목" });
		}
		if(StringUtils.isEmpty(parameter.getContents())) {// 내용 null 체크
			throw new BaseException(BaseResponseCode.VALIDATE_REQUIRED, new String[] { "contents", "내용" });
		}
		service.save(parameter);
		return new BaseResponse<Integer>(parameter.getBoardSeq());
	}
	
	
	
	@DeleteMapping("/{boardSeq}")
	@ResponseBody
	@ApiOperation(value = "삭제처리", notes = "게시물 번호에 해당하는 정보를 삭제합니다.")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "boardSeq", value = "게시물 번호", example = "1"),
	})
	public BaseResponse<Boolean> delete(@PathVariable int boardSeq) {
		Board board = service.get(boardSeq);
		if(board == null) {
			return new BaseResponse<Boolean>(false);
		}
		service.delete(boardSeq);
			return new BaseResponse<Boolean>(true);
	}
}
