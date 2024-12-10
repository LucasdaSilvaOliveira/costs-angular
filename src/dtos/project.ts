export class Project {
    id!: number;
    name: string;
    budget: number;
    category: string;

    constructor(name: string, budget: number, category: string) {
        this.name = name;
        this.budget = budget;
        this.category = category;
    }
}
