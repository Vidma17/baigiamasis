package lt.codeacademy.registration.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class GetVisitorResponseDTO {

    private Long id;
    private String visitorName;
    private String visitorSurname;
    private String visitorEmail;
    private String visitorBirthday;

}
