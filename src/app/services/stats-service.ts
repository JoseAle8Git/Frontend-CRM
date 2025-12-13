import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TechIncidenceStats } from '../models/tech-stats.interface';
import { PackageCount } from '../models/client-dashboard.interface';
import { environment } from '../../environments/environment.prod';

// const STATS_API_URL = 'http://localhost:8080/sistema/api/v1/stats';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  
  constructor(private http: HttpClient) { }

  /**
   * Obtiene los datos para la gráfica de rendimiento. Protegido por JWT.
   * @returns 
   */
  getIncidenceCountsByTechnician(): Observable<TechIncidenceStats[]> {
    // Enpoint: /stats/incidences-by-tech.
    return this.http.get<TechIncidenceStats[]>(`${environment.apiUrl}/stats/incidences-by-tech`, { withCredentials: true });
  }

  /**
   * Obtiene el total de la facturación proyectada para el Dashboard circular.
   * @returns 
   */
  getProjectedMonthlyRevenue(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/stats/revenue`, { withCredentials: true });
  }

  getActiveCountsByPackage(): Observable<PackageCount[]> {
    return this.http.get<PackageCount[]>(`${environment.apiUrl}/stats/package-counts`, { withCredentials: true });
  }

}
