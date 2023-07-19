package com.example.service;

import com.example.model.View;
import com.example.repository.ViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ViewService {
    private final ViewRepository viewRepository;

    @Autowired
    public ViewService(ViewRepository viewRepository) {
        this.viewRepository = viewRepository;
    }

    public View createView(View view) {
        return viewRepository.save(view);
    }

    public Iterable<View> getAllViews() {
        return viewRepository.findAll();
    }

    public View getViewById(Long viewId) {
        return viewRepository.findById(viewId).orElse(null);
    }

    public void deleteView(Long viewId) {
        viewRepository.deleteById(viewId);
    }

}
