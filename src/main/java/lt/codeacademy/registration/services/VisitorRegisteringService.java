package lt.codeacademy.registration.services;

import lt.codeacademy.registration.entities.VisitorRegister;
import lt.codeacademy.registration.repositories.VisitorRegisterRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VisitorRegisteringService {

    private VisitorRegisterRepository visitorRegisterRepository;

    public VisitorRegisteringService(VisitorRegisterRepository visitorRegisterRepository) {
        this.visitorRegisterRepository = visitorRegisterRepository;
    }

    public List<VisitorRegister> getAllVisitorRegisters() {
        return this.visitorRegisterRepository.findAll();
    }


    public VisitorRegister getVisitorById(Long id) {
        Optional<VisitorRegister> visitor = this.visitorRegisterRepository.findById(id);
        if (visitor.isPresent()) {
            return visitor.get();
        } else {
            return null;
        }
    }

    public void deleteVisitorById(Long id) {
        this.visitorRegisterRepository.deleteById(id);
    }

    public void saveVisitorRegister(VisitorRegister visitorRegister) {
        this.visitorRegisterRepository.save(visitorRegister);
    }

}
