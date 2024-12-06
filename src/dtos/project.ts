export class Project {
    id: number;
    name: string;
    budget: number;
    category: string;

    constructor(id: number, name: string, budget: number, category: string) {
        this.id = id;
        this.name = name;
        this.budget = budget;
        this.category = category;
    }
}
