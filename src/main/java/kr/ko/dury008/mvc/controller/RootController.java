package kr.ko.dury008.mvc.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController implements ErrorController{ //SPA 새로고침시 404 에러 를 막기위한 컨트롤러
	@GetMapping("/error")
	public String redirectRoot() {
		return "index.html";
	}
	
	@Override
	public String getErrorPath() {
		return "/error";
	}
}
