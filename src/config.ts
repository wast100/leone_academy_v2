import { CloudSettings } from '@ionic/cloud-angular';


export class Config{
  public newsUrl = 'https://www.spomix.ch/api/v1/studios/e03e1aeb-fd64-4ae4-9cb2-87aaa1aa889d/newsfeeds';
  public calendarUrl = 'https://www.spomix.ch/api/v1/studios/e03e1aeb-fd64-4ae4-9cb2-87aaa1aa889d/clazztemplates?p=0&o=10&s=1&as=fullcalendar&f=%7B%7D&activeOnly=true';
  public detailsUrl  = 'https://www.spomix.ch/api/v1/clazzes';

  public ionicSecurityProfile = 'leonepush';
  public ionicCloudApiToken = 'AAAAHt-AliM:APA91bEB_IKu3zY2mCmZkJ4RZjofupbLmUjkEdKHLRJs-dp3VCDJ5gdQAQ07Bk7znTeFOi6ms_z3lMRGwJYRliKW_6mMXd01TH8UlALEw_VTvIsHuEJoI8ubcAV1JeUhvp4FxTvDhBMp';
  static sender_id = '132598765091';
  static app_id = 'db6fedd9';
}

export const cloudSettings: CloudSettings = {
  'core': {
    'app_id': Config.app_id,
  },
  'push': {
    'sender_id': Config.sender_id,
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};
