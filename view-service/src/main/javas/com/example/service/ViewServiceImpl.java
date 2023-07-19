package com.example.service;

import com.example.model.View;
import com.example.repository.ViewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ViewServiceImpl implements ViewService {

    private final ViewRepository viewRepository;

    @Autowired
    public ViewServiceImpl(ViewRepository viewRepository) {
        this.viewRepository = viewRepository;
    }

    @Override
    public View createView(View view) {
        return viewRepository.save(view);
    }

    @Override
    public List<View> getAllViews() {
        return (List<View>) viewRepository.findAll();
    }

    @Override
    public View getViewById(Long viewId) {
        return viewRepository.findById(viewId).orElse(null);
    }

    @Override
    public void deleteView(Long viewId) {
        viewRepository.deleteById(viewId);
    }
}
