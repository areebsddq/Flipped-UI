export class Lesson {
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
    
    public id: number;
    public hubId: number;
    public title: string;
    public description: string;
    public text: string;
}