package com.example.controller;

import com.example.model.View;
import com.example.service.ViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/view")
public class ViewController {
    private final ViewService viewService;

    @Autowired
    public ViewController(ViewService viewService) {
        this.viewService = viewService;
    }

    @PostMapping
    public ResponseEntity<View> createView(@RequestBody View view) {
        View createdView = viewService.createView(view);
        return new ResponseEntity<>(createdView, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<View>> getAllViews() {
        List<View> views = (List<View>) viewService.getAllViews();
        return new ResponseEntity<>(views, HttpStatus.OK);
    }

    @GetMapping("/{viewId}")
    public ResponseEntity<View> getViewById(@PathVariable Long viewId) {
        View view = viewService.getViewById(viewId);
        if (view == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Return the view and HTTP status 200 OK
        return new ResponseEntity<>(view, HttpStatus.OK);
    }

    @DeleteMapping("/{viewId}")
    public ResponseEntity<Void> deleteView(@PathVariable Long viewId) {
        viewService.deleteView(viewId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
