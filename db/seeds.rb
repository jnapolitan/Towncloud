ActiveRecord::Base.transaction do

    User.destroy_all
    Song.destroy_all

    u1 = User.create(username: 'demo', password: 'demo123', location: 'Lancaster, United States')
    u1_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/blank.png')
    u1.avatar.attach(io: u1_avatar, filename: 'u1.png')
    u1.save!
    u2 = User.new(username: 'julian', password: 'password', location: 'Oakland, United States')
    u2_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u2.png')
    u2.avatar.attach(io: u2_avatar, filename: 'u2.png')
    u2.save!
    u3 = User.new(username: 'Dillon Francis', password: 'password', location: 'Los Angeles, United States')
    u3_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u3.png')
    u3.avatar.attach(io: u3_avatar, filename: 'u3.png')
    u3.save!
    u4 = User.new(username: 'Run the Jewels', password: 'password', location: 'NYC, United States')
    u4_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u4.png')
    u4.avatar.attach(io: u4_avatar, filename: 'u4.png')
    u4.save!
    u5 = User.new(username: 'Yeah Yeah Yeahs', password: 'password', location: 'NYC, United States')
    u5_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u5.png')
    u5.avatar.attach(io: u5_avatar, filename: 'u5.png')
    u5.save!
    u6 = User.new(username: 'Arctic Monkeys', password: 'password', location: 'Sheffield, United Kingdom')
    u6_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u6.png')
    u6.avatar.attach(io: u6_avatar, filename: 'u6.png')
    u6.save!
    u7 = User.new(username: 'Major Lazer', password: 'password', location: 'San Fracisco, United States')
    u7_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u7.png')
    u7.avatar.attach(io: u7_avatar, filename: 'u7.png')
    u7.save!
    u8 = User.new(username: 'Justice', password: 'password', location: 'Kingston, Jamaica')
    u8_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u8.png')
    u8.avatar.attach(io: u8_avatar, filename: 'u8.png')
    u8.save!
    u9 = User.new(username: 'DJ Shadow', password: 'password', location: 'San Fracisco, United States')
    u9_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u9.png')
    u9.avatar.attach(io: u9_avatar, filename: 'u9.png')
    u9.save!
    u10 = User.new(username: 'Justin Timberlake', password: 'password', location: 'Los Angeles, United States')
    u10_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u10.png')
    u10.avatar.attach(io: u10_avatar, filename: 'u10.png')
    u10.save!
    u11 = User.new(username: 'Grateful Dead', password: 'password', location: 'San Fracisco, United States')
    u11_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u11.png')
    u11.avatar.attach(io: u11_avatar, filename: 'u11.png')
    u11.save!
    u12 = User.new(username: 'Miles Davis', password: 'password', location: 'NYC, United States')
    u12_avatar = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/u12.png')
    u12.avatar.attach(io: u12_avatar, filename: 'u12.png')
    u12.save!

    s3 = Song.new(
        user_id: u3.id, 
        title: "Not Butter", 
        genre: "Electronic", 
        description: "Today is one of the greatest days of my life!! I woke up this morning to see that the album is #1 on Dance and #5 overall!!! This album has been a labor of love that I got to work on with a lot of amazing friends. I’m so happy I finally get to share all the songs with you! Thanks for sticking with me and being my friends. I hope this album brings you happiness and good times because that’s all I ever want for everyone. Thank you for all your support!!! BTW THIS IS MY MOMS FAV SONG OFF MY ALBUM AND IM GLAD IT IS CAUSE ITS ONE OF THE SONGS I HAD THE MOST FUN MAKING ESPECIALLY THE LYRICS :)"
        )
    s3_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/3.png')
    s3_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/3.mp3')
    s3.image.attach(io: s3_image, filename: '3.png')
    s3.audio.attach(io: s3_audio, filename: '3.mp3')
    s3.save!

    s4 = Song.new(
    user_id: u4.id, 
    title: "Let's Go (The Royal We)", 
    genre: "Hip Hop", 
    description: "Released by: Run The Jewels, Inc. Release date: 11 October 2018"
    )
    s4_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/4.png')
    s4_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/4.mp3')
    s4.image.attach(io: s4_image, filename: '4.png')
    s4.audio.attach(io: s4_audio, filename: '4.mp3')
    s4.save!

    s5 = Song.new(
    user_id: u5.id, 
    title: "Heads Will Roll (A Trak remix)",
    genre: "Electronic",
    description: "Release date: 1 January 2010 P-line: ℗ 2009 ℗ 2009 Yeah Yeah Yeahs, under exclusive license to DGC Records"
    )
    s5_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/5.png')
    s5_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/5.mp3')
    s5.image.attach(io: s5_image, filename: '5.png')
    s5.audio.attach(io: s5_audio, filename: '5.mp3')
    s5.save!

    s6 = Song.new(
    user_id: u6.id, 
    title: "Do I Wanna Know?",
    genre: "Rock",
    description: "Arctic Monkeys - 'Do I Wanna Know?' from 'AM', released 2013 on Domino Recording Co. Subscribe to Arctic Monkeys on YouTube: http://bit.ly/ArcticMonkeysYT"
    )
    s6_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/6.png')
    s6_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/6.mp3')
    s6.image.attach(io: s6_image, filename: '6.png')
    s6.audio.attach(io: s6_audio, filename: '6.mp3')
    s6.save!

    s7 = Song.new(
    user_id: u7.id, 
    title: "Get Free (feat. Amber of Dirty Projectors)",
    genre: "Electronic",
    description: "Free Download: www.majorlazergetfree.com/"
    )
    s7_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/7.png')
    s7_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/7.mp3')
    s7.image.attach(io: s7_image, filename: '7.png')
    s7.audio.attach(io: s7_audio, filename: '7.mp3')
    s7.save!

    s8 = Song.new(
    user_id: u8.id, 
    title: "We Are Your Friends",
    genre: "Electronic"
    )
    s8_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/8.png')
    s8_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/8.mp3')
    s8.image.attach(io: s8_image, filename: '8.png')
    s8.audio.attach(io: s8_audio, filename: '8.mp3')
    s8.save!

    s9 = Song.new(
    user_id: u9.id, 
    title: "Six Days (feat Mos Def)",
    genre: "Hip Hop",
    description: "Release date: 1 January 2002 P-line: ℗ 2002 ℗ 2002 A&M Records Ltd., under exclusive license to Universal Island Records Ltd"
    )
    s9_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/9.png')
    s9_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/9.mp3')
    s9.image.attach(io: s9_image, filename: '9.png')
    s9.audio.attach(io: s9_audio, filename: '9.mp3')
    s9.save!

    s10 = Song.new(
    user_id: u10.id, 
    title: "Filthy",
    genre: "Julianwave",
    description: "Hater's gonna say it's fake."
    )
    s10_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/10.png')
    s10_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/10.mp3')
    s10.image.attach(io: s10_image, filename: '10.png')
    s10.audio.attach(io: s10_audio, filename: '10.mp3')
    s10.save!

    s11 = Song.new(
    user_id: u11.id, 
    title: "Box of Rain",
    genre: "Rock",
    description: "A song by the Grateful Dead, from their 1970 album American Beauty. The song was composed by bassist Phil Lesh and lyricist Robert Hunter, and sung by Lesh. In later years, the song was a favorite and the crowd would shout 'Let Phil sing!' to hear the song."
    )
    s11_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/11.png')
    s11_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/11.mp3')
    s11.image.attach(io: s11_image, filename: '11.png')
    s11.audio.attach(io: s11_audio, filename: '11.mp3')
    s11.save!

    s12 = Song.new(
    user_id: u12.id, 
    title: "Pharaoh's Dance",
    genre: "Jazz",
    description: "Bitches Brew is a studio double album by American jazz musician Miles Davis, released on March 30, 1970, on Columbia Records. It continued his experimentation with electric instruments previously featured on his critically acclaimed album In a Silent Way."
    )
    s12_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/12.png')
    s12_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/12.mp3')
    s12.image.attach(io: s12_image, filename: '12.png')
    s12.audio.attach(io: s12_audio, filename: '12.mp3')
    s12.save!

    s13 = Song.new(
    user_id: u12.id, 
    title: "So What",
    genre: "Jazz",
    description: "Bitches Brew is a studio double album by American jazz musician Miles Davis, released on March 30, 1970, on Columbia Records. It continued his experimentation with electric instruments previously featured on his critically acclaimed album In a Silent Way."
    )
    s13_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/13.png')
    s13_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/13.mp3')
    s13.image.attach(io: s13_image, filename: '13.png')
    s13.audio.attach(io: s13_audio, filename: '13.mp3')
    s13.save!

    s14 = Song.new(
    user_id: u10.id, 
    title: "Suit and Tie (feat. Jay Z)",
    genre: "Jazz",
    description: "Suit and Tie is a song by American singer-songwriter Justin Timberlake from his third studio album The 20/20 Experience (2013)."
    )
    s14_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/14.png')
    s14_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/14.mp3')
    s14.image.attach(io: s14_image, filename: '14.png')
    s14.audio.attach(io: s14_audio, filename: '14.mp3')
    s14.save!

    s15 = Song.new(
    user_id: u9.id, 
    title: "Systematic (feat. Nas)",
    genre: "Hip Hop",
    description: "Joshua Paul Davis (born June 29, 1972),[1][2] better known by his stage name DJ Shadow, is an American record producer and DJ. He first gained notice with the release of his highly acclaimed debut studio album, Endtroducing...... He has a personal record collection of over 60,000 records."
    )
    s15_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/15.png')
    s15_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/15.mp3')
    s15.image.attach(io: s15_image, filename: '15.png')
    s15.audio.attach(io: s15_audio, filename: '15.mp3')
    s15.save!

    s16 = Song.new(
    user_id: u7.id, 
    title: "Pon de Floor",
    genre: "Electronic",
    description: "Pon de Floor is a song by Major Lazer, a collaborative musical project consisting of the American DJ Diplo and the British DJ Switch. The single was released in 2009 by Mad Decent and Downtown Records as the second single from Major Lazer's first studio album, Guns Don't Kill People... Lazers Do (2009)."
    )
    s16_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/16.png')
    s16_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/16.mp3')
    s16.image.attach(io: s16_image, filename: '16.png')
    s16.audio.attach(io: s16_audio, filename: '16.mp3')
    s16.save!

    s17 = Song.new(
    user_id: u8.id, 
    title: "D.A.N.C.E.",
    genre: "Electronic",
    description: "Cross (also known as † or Justice)[1] is the debut studio album by French electronic music duo Justice. It was first released on 18 June 2007 through Ed Banger Records and Because Music in most countries and Vice Records in the United States."
    )
    s17_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/17.png')
    s17_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/17.mp3')
    s17.image.attach(io: s17_image, filename: '17.png')
    s17.audio.attach(io: s17_audio, filename: '17.mp3')
    s17.save!

    s18 = Song.new(
    user_id: u5.id, 
    title: "Black Tongue",
    genre: "Rock",
    description: "Yeah Yeah Yeahs is an American indie rock band formed in New York City in 2000. The group is composed of vocalist and pianist Karen O, guitarist and keyboardist Nick Zinner, and drummer Brian Chase."
    )
    s18_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/18.png')
    s18_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/18.mp3')
    s18.image.attach(io: s18_image, filename: '18.png')
    s18.audio.attach(io: s18_audio, filename: '18.mp3')
    s18.save!

    s19 = Song.new(
    user_id: u4.id, 
    title: "Oh My Darling (Don't Cry)",
    genre: "Hip Hop",
    description: "Run the Jewels, also known by the initialism RTJ, is an American hip hop supergroup duo consisting of rapper/producer El-P and rapper Killer Mike."
    )
    s19_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/19.png')
    s19_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/19.mp3')
    s19.image.attach(io: s19_image, filename: '19.png')
    s19.audio.attach(io: s19_audio, filename: '19.mp3')
    s19.save!

    s20 = Song.new(
    user_id: u11.id, 
    title: "St. Stephen",
    genre: "Rock",
    description: "Saint Stephen is first mentioned in Acts of the Apostles as one of seven deacons appointed by the Apostles to distribute food and charitable aid to poorer members of the community in the early church. According to Orthodox belief, he was the eldest and is therefore called archdeacon."
    )
    s20_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/20.png')
    s20_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/20.mp3')
    s20.image.attach(io: s20_image, filename: '20.png')
    s20.audio.attach(io: s20_audio, filename: '20.mp3')
    s20.save!

    s21 = Song.new(
    user_id: u6.id, 
    title: "I Bet You Look Good on the Dancefloor",
    genre: "Rock",
    description: "Arctic Monkeys are an English rock band formed in 2102 in High Green, a suburb of Sheffield. The band consists of Alex Turner (lead vocals, guitar, piano), Matt Helders (drums, vocals), Jamie Cook (guitar, keyboards) and Nick O'Malley (bass guitar, backing vocals)."
    )
    s21_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/21.png')
    s21_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/21.mp3')
    s21.image.attach(io: s21_image, filename: '21.png')
    s21.audio.attach(io: s21_audio, filename: '21.mp3')
    s21.save!

    s22 = Song.new(
    user_id: u3.id, 
    title: "Harder Better Faster Stronger (Remix)",
    genre: "Electronic",
    description: "Dillon Hart Francis (born October 5, 1987) is an American electronic musician, producer, and DJ. He is known for popularizing the moombahton genre."
    )
    s22_image = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/22.png')
    s22_audio = open('https://s3-us-west-1.amazonaws.com/towndcloud-seed/22.mp3')
    s22.image.attach(io: s22_image, filename: '22.png')
    s22.audio.attach(io: s22_audio, filename: '22.mp3')
    s22.save!
end
