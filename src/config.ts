import { CloudSettings } from '@ionic/cloud-angular';


export class Config{
  public newsUrl = 'http://rc.spomix.ch/api/v1/studios/872c8c65-7d15-40f2-9265-a8a9dcf5c1be/newsfeeds';
  public calendarUrl = 'http://rc.spomix.ch/api/v1/studios/872c8c65-7d15-40f2-9265-a8a9dcf5c1be/clazztemplates?p=0&o=10&s=1&as=fullcalendar&f=%7B%7D&activeOnly=true';

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
