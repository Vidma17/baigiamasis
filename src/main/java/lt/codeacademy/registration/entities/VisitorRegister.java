package lt.codeacademy.registration.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class VisitorRegister {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String visitorName;

    @Column
    private String visitorSurname;

    @Column
    private String visitorEmail;

    @Column
    private String visitorBirthday;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "visitor_id", nullable = false)
    private List<Visitor> visitors;
}
