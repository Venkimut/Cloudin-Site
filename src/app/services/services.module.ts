import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import { HeaderfooterModule } from '../headerfooter/headerfooter.module';
import { MobileAppServiceComponent } from './mobile-app-service/mobile-app-service.component';
import { WebApplicationComponent } from './web-application/web-application.component';
import { UiUxDesignComponent } from './ui-ux-design/ui-ux-design.component';
import { ReactNativeDevelopmentComponent } from './react-native-development/react-native-development.component';
import { MlAndNlComponent } from './ml-and-nl/ml-and-nl.component';
import { ItConsultingComponent } from './it-consulting/it-consulting.component';
import { ChatbotServiceComponent } from './chatbot-service/chatbot-service.component';
import { BlockchainTechnologyComponent } from './blockchain-technology/blockchain-technology.component';
import { AwsAndAzureComponent } from './aws-and-azure/aws-and-azure.component';
import { ArtificialIntellienceComponent } from './artificial-intellience/artificial-intellience.component';



@NgModule({
  declarations: [ServiceComponent, MobileAppServiceComponent, WebApplicationComponent, UiUxDesignComponent, ReactNativeDevelopmentComponent, MlAndNlComponent, ItConsultingComponent, ChatbotServiceComponent, BlockchainTechnologyComponent, AwsAndAzureComponent, ArtificialIntellienceComponent],
  imports: [
    CommonModule,
    HeaderfooterModule
  ],
  exports: [
    ServiceComponent
  ]
})
export class ServicesModule { }
