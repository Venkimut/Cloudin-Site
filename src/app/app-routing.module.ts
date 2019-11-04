import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './mainpage/homepage/homepage.component';
import { ServiceComponent } from './services/service/service.component';
import { MobileAppServiceComponent } from './services/mobile-app-service/mobile-app-service.component';
import { ChatbotServiceComponent} from './services/chatbot-service/chatbot-service.component';
import { ArtificialIntellienceComponent} from './services/artificial-intellience/artificial-intellience.component';
import { MlAndNlComponent} from './services/ml-and-nl/ml-and-nl.component';
import { BlockchainTechnologyComponent} from './services/blockchain-technology/blockchain-technology.component';
import { WebApplicationComponent} from './services/web-application/web-application.component';
import { UiUxDesignComponent} from './services/ui-ux-design/ui-ux-design.component';
import { ReactNativeDevelopmentComponent} from './services/react-native-development/react-native-development.component';
import { AwsAndAzureComponent} from './services/aws-and-azure/aws-and-azure.component';
import { RanddComponent} from './randd/randd.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'services',
    component: ServiceComponent
  },
  {
    path: 'mobile-app',
    component: MobileAppServiceComponent
  },
  {
    path: 'chatbot',
    component: ChatbotServiceComponent
  },
  {
    path: 'Artificial-Intellience',
    component: ArtificialIntellienceComponent
  },
  {
    path: 'ml-and-nl',
    component: MlAndNlComponent
  },
  {
    path: 'blockchain-technology',
    component: BlockchainTechnologyComponent
  },
  {
    path: 'web-application',
    component: WebApplicationComponent
  },
  {
    path: 'ui-ux-design',
    component: UiUxDesignComponent
  },
  {
    path: 'react-native-development',
    component: ReactNativeDevelopmentComponent
  },
  {
    path: 'aws-and-azure',
    component: AwsAndAzureComponent
  },
  {
    path: 'randd',
    component: RanddComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
