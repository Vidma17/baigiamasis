package lt.codeacademy.registration.repositories;

import lt.codeacademy.registration.entities.Agreement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgreementRepository extends JpaRepository<Agreement, Long> {
}
