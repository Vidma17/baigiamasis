package lt.codeacademy.registration.repositories;

import lt.codeacademy.registration.entities.VisitorDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitorDetailsRepository extends JpaRepository<VisitorDetails, Long> {
}
