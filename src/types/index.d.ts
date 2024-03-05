export interface Jobs{
    id: string;
    title: string;
    gender: string;
    salary: number;
    workingTime: string;
    workingSchedule: string;
    deadline: Date;
    telegramLink: string;
    instagramLink: string;
    tgUsername: string;
    phoneNumber: string;
    benefit: string;
    requirement: string;
    minAge: number;
    maxAge: number;
    latitude?: number;
    longitude?: number;
    categoryId: string;
    districtId: string;
    createDate: Date;
}

export interface Workers{
    id: string;
    createdBy: string;
    createdDate: Date;
    deadline: Date;
    birthDate: Date;
    fullName: string;
    username: string;
    title: string;
    salary: number;
    gender: string;
    workingTime: string;
    workingSchedule: string;
    telegramLink: string;
    instagramLink: string;
    tgUsername: string;
    phoneNumber: string;
    location: string;
    districtId: string;
    categoryId: string;
    createDate: Date;
}

export interface Experience{
    id: string;
    companyName: string;
    position: string;
    startDate: Date;
    endDate: Date;
    description: string;
}

export interface Category{
    id: string;
    title: string;
    description: string;
}

export interface District{
    id: string;
    name: string;
}

export interface Region{
    id: string;
    name: string;
}