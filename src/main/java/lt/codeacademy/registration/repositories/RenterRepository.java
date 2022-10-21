package lt.codeacademy.registration.repositories;

import lt.codeacademy.registration.entities.Renter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RenterRepository extends JpaRepository<Renter, Long> {
}
