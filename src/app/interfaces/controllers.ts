/**
 * Ensures all intended inputs are considered and provides a type for Components that will be used to Control a Character
 * @version 01.01.22
 * @author MrH-rezroll
 */
export interface CharacterController{
    dUp?: boolean;
    dDown?: boolean;
    dLeft?: boolean;
    dRight?: boolean;
    bA?: boolean;
    bB?: boolean;
    bStart?: boolean;
    bSelect?: boolean;
    tLeft?: boolean;
    tRight?: boolean;
}