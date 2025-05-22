import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [

    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadComponent: () => import('./main/components/home/home.component').then(m => m.HomeComponent)},
            {
                path: 'about',
                loadComponent: () => import('./main/components/about/about.component').then(m => m.AboutComponent),
                children: [
                  { path: '', redirectTo: 'history', pathMatch: 'full' },
                  { path: 'history', loadComponent: () => import('./main/components/about/components/history/history.component').then(m => m.HistoryComponent) },
                  { path: 'vision-and-mission', loadComponent: () => import('./main/components/about/components/vision-and-mission/vision-and-mission.component').then(m => m.VisionAndMissionComponent) },
                  { path: 'academic-program', loadComponent: () => import('./main/components/about/components/academic-program/academic-program.component').then(m => m.AcademicProgramComponent) },
                  { path: 'organizational-chart', loadComponent: () => import('./main/components/about/components/organizational-chart/organizational-chart.component').then(m => m.OrganizationalChartComponent) }
                ]
              },
            { path: 'AcadLearn', loadComponent: () => import('./main/components/acad-learn/acad-learn.component').then(m => m.AcadLearnComponent)},
            { path: 'NewsNUpdates', loadComponent: () => import('./main/components/news-and-updates/news-and-updates.component').then(m => m.NewsAndUpdatesComponent)},
            { path: 'Community', loadComponent: () => import('./main/components/community/community.component').then(m => m.CommunityComponent)},
            { path: 'ContactUs', loadComponent: () => import('./main/components/contact-us/contact-us.component').then(m => m.ContactUsComponent)},
        ]
    }
];
