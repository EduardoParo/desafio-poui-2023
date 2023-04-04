import { InMemoryDbService } from 'angular-in-memory-web-api';
import { delay, Observable, of } from 'rxjs';
import { ICategory, IEntry } from './shared/interfaces/category'

export class InMemoryDataBase implements InMemoryDbService {
  createDb(reqInfo?: any): Observable<{}> | Promise<{}> {
    
    const categories: ICategory[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' }
    ];

    const entries: IEntry[] = [
      { id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id,  paid: 'Devendo', date: "2023-01-01", amount: "70,80", type: "Despesa", description: "Qualquer descrição para essa despesa" },
      { id: 2, name: 'Suplementos', categoryId: categories[1].id, paid: 'Pago', date: "2023-01-01", amount: "15,00", type: "Despesa", description: "Qualquer descrição para essa despesa" },
      { id: 4, name: 'Uber', categoryId: categories[1].id, paid: 'Pago', date: "2023-01-01", amount: "30,00", type: "Despesa", description: "Qualquer descrição para essa despesa" },
    ]

    const db = {
      categories,
      entries,
    };

    return of(db).pipe(delay(1100));
  }
}
