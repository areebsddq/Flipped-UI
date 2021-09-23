export class Hub {
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
    
    public id: number;
    public name: string;
    public creatorId: number;
}
