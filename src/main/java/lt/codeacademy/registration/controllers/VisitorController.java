package lt.codeacademy.registration.controllers;


import lt.codeacademy.registration.dto.GetVisitorResponseDTO;
import lt.codeacademy.registration.dto.VisitorRequestDTO;
import lt.codeacademy.registration.entities.VisitorRegister;
import lt.codeacademy.registration.services.VisitorRegisteringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static lt.codeacademy.registration.converter.VisitorConverter.*;

@CrossOrigin
@RestController
@RequestMapping("/visitor-registration")
public class VisitorController {

    @Autowired
    private VisitorRegisteringService visitorRegisteringService;

    @GetMapping
    public List<VisitorRegister> getAllVisitorRegisters() {
        return visitorRegisteringService.getAllVisitorRegisters();
    }

    @PostMapping
    public void createVisitorRegister(@RequestBody VisitorRequestDTO visitorRequestDTO) {
        VisitorRegister visitorRegister = convertCreateVisitorRegisterRequestDtoToVisitorRegister(visitorRequestDTO);
        this.visitorRegisteringService.saveVisitorRegister(visitorRegister);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> putVisitorById(@PathVariable(name = "id") Long id,
                                             @RequestBody VisitorRequestDTO requestDTO) {
        VisitorRegister visitor = this.visitorRegisteringService.getVisitorById(id);
        if (visitor == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        VisitorRegister newVisitor = convertCreateVisitorRegisterRequestDtoToVisitorRegister(requestDTO);
        newVisitor.setId(visitor.getId());
        this.visitorRegisteringService.saveVisitorRegister(newVisitor);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> patchVisitorById(@PathVariable(name = "id") Long id,
                                               @RequestBody VisitorRequestDTO requestDTO) {
        VisitorRegister visitor = this.visitorRegisteringService.getVisitorById(id);
        if (visitor == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        patchVisitorRegisterFromCreateVisitorRegisterRequestDto(visitor, requestDTO);
        this.visitorRegisteringService.saveVisitorRegister(visitor);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<GetVisitorResponseDTO> getVisitorById(@PathVariable(name = "id") Long id) {
        VisitorRegister visitor = this.visitorRegisteringService.getVisitorById(id);
        if (visitor == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(convertVisitorRegisterToGetVisitorRegisterResponseDto(visitor));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVisitorById(@PathVariable(name = "id") Long id) {
        this.visitorRegisteringService.deleteVisitorById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}/company")
    public ResponseEntity<String> getVisitorsVisitorNameById(@PathVariable(name = "id") Long id) {
        VisitorRegister visitor = this.visitorRegisteringService.getVisitorById(id);
        if (visitor == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(convertVisitorRegisterToGetVisitorRegisterResponseDto(visitor).getVisitorName());
    }
}
