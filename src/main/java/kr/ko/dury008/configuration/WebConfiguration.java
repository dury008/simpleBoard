package kr.ko.dury008.configuration;

import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.http.MediaType;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

import kr.ko.dury008.configuration.servlet.handler.BaseHandlerInterceptor;
import kr.ko.dury008.framework.data.web.MySQLPageRequestHandlerMethodArgumentResolver;
import kr.ko.dury008.mvc.domain.BaseCodeLabelEnum;

@Configuration
public class WebConfiguration implements WebMvcConfigurer{
	
	@Autowired
	private GlobalConfig config;
	
	private static final String WINDOWS_FILE = "file:///";
	private static final String LINUX_FILE = "file:";
	
	@Bean //다국어 프로퍼티를 사용하기위한 아래 메세지 소스를 빈으로 등록
	public ReloadableResourceBundleMessageSource messageSource() {
		ReloadableResourceBundleMessageSource source = new ReloadableResourceBundleMessageSource();
		source.setBasename("classpath:/messages/message");
		source.setDefaultEncoding("UTF-8");
		source.setCacheSeconds(60);
		source.setDefaultLocale(Locale.KOREAN);
		source.setUseCodeAsDefaultMessage(true);
		return source;
			
	}
	
	@Bean 
	public BaseHandlerInterceptor baseHandlerInterceptor() { 
		return new BaseHandlerInterceptor(); 
		}
	
	@Bean
	public ObjectMapper objectMapper() {
		ObjectMapper objectMapper = new ObjectMapper();
		SimpleModule simpleModule = new SimpleModule();
		simpleModule.addSerializer(BaseCodeLabelEnum.class, new BaseCodeLabelEnumJsonSerializer());
		objectMapper.registerModule(simpleModule);
		return objectMapper;
	}
	
	@Bean
	public MappingJackson2JsonView mappingJackson2JsonView() {
		MappingJackson2JsonView jsonView = new MappingJackson2JsonView();
		jsonView.setContentType(MediaType.APPLICATION_JSON_VALUE);
		jsonView.setObjectMapper(objectMapper());
		return jsonView;
	}
	@Bean
	public GlobalConfig config() {
		return new GlobalConfig();
	}
	
	@Bean
	public FilterRegistrationBean<SitemeshConfiguration> sitemeshBean(){ //sitemash설정
		FilterRegistrationBean<SitemeshConfiguration> filter = new FilterRegistrationBean<SitemeshConfiguration>();
		filter.setFilter(new SitemeshConfiguration());
		return filter;
	}
	@Override 
	public void addInterceptors(InterceptorRegistry registry) { 
		registry.addInterceptor(baseHandlerInterceptor()); 
		}
	
	@Override
	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
		resolvers.add(new MySQLPageRequestHandlerMethodArgumentResolver());
	}
	

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("forward:/index.html");
	}
	
}
