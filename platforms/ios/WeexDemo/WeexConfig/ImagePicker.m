//
//  ImagePicker.m
//  WeexDemo
//
//  Created by Crazyhuiliang on 2018/9/10.
//  Copyright © 2018年 taobao. All rights reserved.
//

#import "ImagePicker.h"

@implementation ImagePicker
@synthesize weexInstance;
WX_EXPORT_METHOD(@selector(pick:))
-(void) pick:(WXModuleKeepAliveCallback)callback {
    self.callback = callback;
    //    self.callback(@"eee", false);
    UIImagePickerController *imagePickerVC = [[UIImagePickerController new] init];
    // 设置资源来源（相册、相机、图库之一）
    imagePickerVC.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
    // 设置可用的媒体类型、默认只包含kUTTypeImage，如果想选择视频，请添加kUTTypeMovie
    // 如果选择的是视屏，允许的视屏时长为20秒
    //    imagePickerVC.videoMaximumDuration = 20;
    // 允许的视屏质量（如果质量选取的质量过高，会自动降低质量）
    //    imagePickerVC.videoQuality = UIImagePickerControllerQualityTypeHigh;
    //    imagePickerVC.mediaTypes = @[(NSString *)kUTTypeMovie, (NSString *)kUTTypeImage];
    // 设置代理，遵守UINavigationControllerDelegate, UIImagePickerControllerDelegate 协议
    imagePickerVC.delegate = self;
    // 是否允许编辑（YES：图片选择完成进入编辑模式）
    imagePickerVC.allowsEditing = YES;
    // model出控制器
    UIViewController *vc = [self getCurrentVC];
    
    [vc presentViewController:imagePickerVC animated:YES completion:^{}];
}
//获取当前屏幕显示的viewcontroller
- (UIViewController *)getCurrentVC
{
    UIViewController *result = nil;
    
    UIWindow * window = [[UIApplication sharedApplication] keyWindow];
    if (window.windowLevel != UIWindowLevelNormal)
    {
        NSArray *windows = [[UIApplication sharedApplication] windows];
        for(UIWindow * tmpWin in windows)
        {
            if (tmpWin.windowLevel == UIWindowLevelNormal)
            {
                window = tmpWin;
                break;
            }
        }
    }
    
    UIView *frontView = [[window subviews] objectAtIndex:0];
    id nextResponder = [frontView nextResponder];
    
    if ([nextResponder isKindOfClass:[UIViewController class]])
        result = nextResponder;
    else
        result = window.rootViewController;
    
    return result;
}




//- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingImage:(UIImage *)image editingInfo:(nullable NSDictionary<NSString *,id> *)editingInfo NS_DEPRECATED_IOS(2_0, 3_0); {
//
//}
- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary<NSString *,id> *)info; {
    [picker dismissViewControllerAnimated:true completion:^{}];
    UIImage *image = [info objectForKey:UIImagePickerControllerEditedImage];
    NSString *pathStr = [[info objectForKey:UIImagePickerControllerImageURL] lastPathComponent];
    
    //将图片转为data数据
    NSData *imageData = UIImageJPEGRepresentation(image, 0.5);
    //将数据转为base64字符串
    NSString *datastr = [imageData base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithCarriageReturn];
    NSDictionary *result = @{
                             @"name": pathStr,
                             @"url": [@"data:image/jpeg;base64," stringByAppendingString:datastr]
                            };
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:result options:0 error:NULL];
    NSString *rs = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    self.callback(rs, false);
}
- (void)imagePickerControllerDidCancel:(UIImagePickerController *)picker; {
    [picker dismissViewControllerAnimated:true completion:^{}];
}
@end
