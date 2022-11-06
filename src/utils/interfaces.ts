import mongoose from 'mongoose';

export enum userRole {
    SUPERADMIN = "SUPERADMIN",
    ADMIN = "ADMIN",
    USER = "USER",
}

export enum gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
}