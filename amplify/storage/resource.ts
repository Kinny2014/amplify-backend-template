import { defineStorage } from '@aws-amplify/backend';

export const firstBucket = defineStorage({
  name: 'huuch-test-s3',
  access: (allow) => ({
        'common/*': [
            allow.authenticated.to(['read','write']),
            allow.guest.to(['read', 'write'])
          ],
          'game_pic/*': [
              allow.authenticated.to(['read','write']),
              allow.guest.to(['read', 'write'])
          ]
  })
  isDefault: true
});

export const secondBucket = defineStorage({
  name: 'huuch-s3',
  access: (allow) => ({
          'common/*': [
             allow.authenticated.to(['read','write']),
             allow.guest.to(['read', 'write'])
           ],
           'game_pic/*': [
               allow.authenticated.to(['read','write']),
               allow.guest.to(['read', 'write'])
           ]
  })
})