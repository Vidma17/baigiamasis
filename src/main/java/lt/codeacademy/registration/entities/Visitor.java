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
public class Visitor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String brand;

    @Column
    private String model;

    @Column
    private int yearOfProduction;

    @Column
    private double price;

    @Column
    private String category;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "car_id")
    private VisitorDetails visitorDetails;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "car_id")
    private List<Agreement> agreements;
}
