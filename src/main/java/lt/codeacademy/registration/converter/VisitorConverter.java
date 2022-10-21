package lt.codeacademy.registration.converter;

import lt.codeacademy.registration.dto.VisitorRequestDTO;
import lt.codeacademy.registration.dto.GetVisitorResponseDTO;
import lt.codeacademy.registration.entities.VisitorRegister;

public class VisitorConverter {

    public static GetVisitorResponseDTO convertVisitorRegisterToGetVisitorRegisterResponseDto(VisitorRegister visitorRegister) {
        GetVisitorResponseDTO visitorRegisterDTO = null;
        if (visitorRegister != null) {
            visitorRegisterDTO = new GetVisitorResponseDTO();
            visitorRegisterDTO.setVisitorSurname(visitorRegister.getVisitorSurname());
            visitorRegisterDTO.setId(visitorRegister.getId());
            visitorRegisterDTO.setVisitorName(visitorRegister.getVisitorName());
            visitorRegisterDTO.setVisitorEmail(visitorRegister.getVisitorEmail());
            visitorRegisterDTO.setVisitorBirthday(visitorRegister.getVisitorBirthday());
        }
        return visitorRegisterDTO;
    }

    public static VisitorRegister convertCreateVisitorRegisterRequestDtoToVisitorRegister(VisitorRequestDTO requestDTO) {
        VisitorRegister visitorRegister = null;
        if (requestDTO != null) {
            visitorRegister = new VisitorRegister();
            visitorRegister.setVisitorName(requestDTO.getVisitorName());
            visitorRegister.setVisitorEmail(requestDTO.getVisitorEmail());
            visitorRegister.setVisitorBirthday(requestDTO.getVisitorBirthday());
            visitorRegister.setVisitorSurname(requestDTO.getVisitorSurname());
        }
        return visitorRegister;
    }

    public static VisitorRegister patchVisitorRegisterFromCreateVisitorRegisterRequestDto(VisitorRegister visitorRegister,
                                                                            VisitorRequestDTO requestDTO) {
        if (isNewStringValueEmptyNullOrSameAsOld(requestDTO.getVisitorSurname(), visitorRegister.getVisitorSurname())) {
            visitorRegister.setVisitorSurname(requestDTO.getVisitorSurname());
        }

        if (isNewStringValueEmptyNullOrSameAsOld(requestDTO.getVisitorName(), visitorRegister.getVisitorName())) {
            visitorRegister.setVisitorName(requestDTO.getVisitorName());
        }

        if (isNewStringValueEmptyNullOrSameAsOld(requestDTO.getVisitorEmail(), visitorRegister.getVisitorEmail())) {
            visitorRegister.setVisitorEmail(requestDTO.getVisitorEmail());
        }

        if (isNewStringValueEmptyNullOrSameAsOld(requestDTO.getVisitorBirthday(), visitorRegister.getVisitorBirthday())) {
            visitorRegister.setVisitorBirthday(requestDTO.getVisitorBirthday());
        }

        return visitorRegister;
    }

    private static boolean isNewStringValueEmptyNullOrSameAsOld(String newValue, String oldValue){
        return newValue != null && !newValue.isEmpty() && !newValue.equals(oldValue);
    }
}
