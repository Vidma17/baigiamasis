package lt.codeacademy.registration.repositories;

import lt.codeacademy.registration.entities.VisitorRegister;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitorRegisterRepository extends JpaRepository<VisitorRegister, Long> {
}
