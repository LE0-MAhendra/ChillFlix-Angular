import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../types/video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embeded',
  standalone: true,
  imports: [],
  templateUrl: './video-embeded.component.html',
  styleUrl: './video-embeded.component.scss',
})
export class VideoEmbededComponent implements OnInit{
  constructor(private sanitizer: DomSanitizer) {}
  @Input() key: string= '';
  videoURl: SafeResourceUrl = '';
  ngOnInit(): void {
      this.videoURl=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.key)
  }
}
