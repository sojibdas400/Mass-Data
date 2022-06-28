export interface Person{
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
    educationalQualifications?: EducationalQualifications[];
}

export interface EducationalQualifications {
    name?: string;
    instituteName?: string;
    grade?: string;
    fromDate?: Date;
    toDate?: Date;
}
