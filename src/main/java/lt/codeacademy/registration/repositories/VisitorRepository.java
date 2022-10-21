package lt.codeacademy.registration.repositories;

import lt.codeacademy.registration.entities.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitorRepository extends JpaRepository<Visitor, Long> {
}
