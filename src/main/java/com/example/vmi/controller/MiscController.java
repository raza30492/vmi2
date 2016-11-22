package com.example.vmi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MiscController {

	@RequestMapping(value = {"/", "/home"})
	public String index(){
		return "index";
	}
}
