package lt.codeacademy.registration.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VisitorRequestDTO {

    private String visitorName;
    private String visitorSurname;
    private String visitorEmail;

    private String visitorBirthday;

    @Override
    public String toString() {
        return "SaveVisitorRegisterRequestDTO{" +
                "visitorName='" + visitorName + '\'' +
                ", visitorSurname='" + visitorSurname + '\'' +
                ", visitorEmail='" + visitorEmail + '\'' +
                ", visitorBirthday='" + visitorBirthday + '\'' +
                '}';
    }
}

