Vim�UnDo� �%1�7��Ɣ��W!�ձ���*��tYy�7��   Z           #      %       %   %   %    `Zh�    _�                        "    ����                                                                                                                                                                                                                                                                                                                                                             `Zd�     �                 "CREATE DATABASE just_tech_news_db;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `Zd�     �                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `Zd�    �                  �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `Zg     �   
          
   A/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;   C/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;   A/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;   /*!50503 SET NAMES utf8 */;   +/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;   #/*!40103 SET TIME_ZONE='+00:00' */;   D/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;   S/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;   K/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;   8/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                  V        `Zg     �   	   
           5�_�                            ����                                                                                                                                                                                                                                                                                                                                       '           V        `Zg     �             	   --    -- Dumping data for table `user`   --       LOCK TABLES `user` WRITE;   ,/*!40000 ALTER TABLE `user` DISABLE KEYS */;  �INSERT INTO `user` VALUES (1,'joey','joey@doe.com','$2b$10$AVS0JMsqBXHcWeYsrmN7XevicQgJMPXgxNfjLWMK5jrhK23oQ6QkO','2021-03-23 21:45:19','2021-03-23 21:45:19'),(2,'jane','jane@doe.com','$2b$10$g/E4q11ovw2CCRdAc4Lnt.lpkvndd0Fm3WJ7tNGJPSL2lWu6tuLyG','2021-03-23 21:45:30','2021-03-23 21:45:30'),(3,'john','john@doe.com','$2b$10$kzfVrAeYw1kPUcDf.RfMA.UiIk.4BDo2xlMXuGuFkOnLrUchyCYC.','2021-03-23 21:45:39','2021-03-23 21:45:39');   +/*!40000 ALTER TABLE `user` ENABLE KEYS */;   UNLOCK TABLES;5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                  V        `Zg$     �   
      3    �   
      3    5�_�      	                      ����                                                                                                                                                                                                                                                                                                                            (           (           V        `Zg'     �         <    5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                       '           V        `Zg.     �             	   --    -- Dumping data for table `post`   --       LOCK TABLES `post` WRITE;   ,/*!40000 ALTER TABLE `post` DISABLE KEYS */;   INSERT INTO `post` VALUES (1,'running','https://runbuddy.com/press',3,'2021-03-23 21:45:57','2021-03-23 21:45:57'),(2,'walk','https://runbuddy.com/press',2,'2021-03-23 21:46:04','2021-03-23 21:46:04'),(3,'sleep','https://runbuddy.com/press',1,'2021-03-23 21:46:11','2021-03-23 21:46:11');   +/*!40000 ALTER TABLE `post` ENABLE KEYS */;   UNLOCK TABLES;5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                  V        `Zg1     �         4    �         4    5�_�   
                         ����                                                                                                                                                                                                                                                                                                                            (           (           V        `Zg3     �         =    5�_�                    (        ����                                                                                                                                                                                                                                                                                                                            (           )           v        `Zg8     �   '   )   >               5�_�                    4        ����                                                                                                                                                                                                                                                                                                                            4           :           V        `Zg=     �   3   4          '/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;   ;/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;   1/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;   ?/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;   A/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;   ?/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;   )/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;5�_�                    3        ����                                                                                                                                                                                                                                                                                                                            4           4           V        `Zg>     �   2   3           5�_�                            ����                                                                                                                                                                                                                                                                                                                            3           3           V        `ZgD     �         4       5�_�                           ����                                                                                                                                                                                                                                                                                                                            4           4           V        `ZgI    �                USE just_tech_news_db5�_�                           ����                                                                                                                                                                                                                                                                                                                            4           4           V        `ZgK    �         5    5�_�                           ����                                                                                                                                                                                                                                                                                                                                       6           V        `Zg�     �               �               �             0   <-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)   --   1-- Host: localhost    Database: just_tech_news_db   9-- ------------------------------------------------------   -- Server version	8.0.23       --    -- Dumping data for table `user`   --       LOCK TABLES `user` WRITE;   ,/*!40000 ALTER TABLE `user` DISABLE KEYS */;  �INSERT INTO `user` VALUES (1,'joey','joey@doe.com','$2b$10$AVS0JMsqBXHcWeYsrmN7XevicQgJMPXgxNfjLWMK5jrhK23oQ6QkO','2021-03-23 21:45:19','2021-03-23 21:45:19'),(2,'jane','jane@doe.com','$2b$10$g/E4q11ovw2CCRdAc4Lnt.lpkvndd0Fm3WJ7tNGJPSL2lWu6tuLyG','2021-03-23 21:45:30','2021-03-23 21:45:30'),(3,'john','john@doe.com','$2b$10$kzfVrAeYw1kPUcDf.RfMA.UiIk.4BDo2xlMXuGuFkOnLrUchyCYC.','2021-03-23 21:45:39','2021-03-23 21:45:39');   +/*!40000 ALTER TABLE `user` ENABLE KEYS */;   UNLOCK TABLES;       --    -- Dumping data for table `post`   --       LOCK TABLES `post` WRITE;   ,/*!40000 ALTER TABLE `post` DISABLE KEYS */;   INSERT INTO `post` VALUES (1,'running','https://runbuddy.com/press',3,'2021-03-23 21:45:57','2021-03-23 21:45:57'),(2,'walk','https://runbuddy.com/press',2,'2021-03-23 21:46:04','2021-03-23 21:46:04'),(3,'sleep','https://runbuddy.com/press',1,'2021-03-23 21:46:11','2021-03-23 21:46:11');   +/*!40000 ALTER TABLE `post` ENABLE KEYS */;   UNLOCK TABLES;       --   #-- Dumping data for table `comment`   --       LOCK TABLES `comment` WRITE;   //*!40000 ALTER TABLE `comment` DISABLE KEYS */;   �INSERT INTO `comment` VALUES (1,'I like this post',2,2,'2021-03-23 21:46:40','2021-03-23 21:46:40'),(2,'I like this post',1,3,'2021-03-23 21:46:46','2021-03-23 21:46:46'),(3,'I like this post',3,1,'2021-03-23 21:46:51','2021-03-23 21:46:51');   ./*!40000 ALTER TABLE `comment` ENABLE KEYS */;   UNLOCK TABLES;       --    -- Dumping data for table `vote`   --       LOCK TABLES `vote` WRITE;   ,/*!40000 ALTER TABLE `vote` DISABLE KEYS */;   2INSERT INTO `vote` VALUES (3,1,2),(2,2,3),(1,3,3);   +/*!40000 ALTER TABLE `vote` ENABLE KEYS */;   UNLOCK TABLES;   )/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;       (-- Dump completed on 2021-03-23 17:56:035�_�                    \        ����                                                                                                                                                                                                                                                                                                                            \           e           V        `Zh    �   [   \       
   8/*!40101 SET character_set_client = @saved_cs_client */;   )/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;       '/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;   ;/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;   1/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;   ?/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;   A/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;   ?/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;   )/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;5�_�                            ����                                                                                                                                                                                                                                                                                                                                       "           V        `Zh�     �                DROP TABLE IF EXISTS `comment`;   >/*!40101 SET @saved_cs_client     = @@character_set_client */;   //*!50503 SET character_set_client = utf8mb4 */;   CREATE TABLE `comment` (   #  `id` int NOT NULL AUTO_INCREMENT,     `comment_text` text NOT NULL,     `user_id` int DEFAULT NULL,     `post_id` int DEFAULT NULL,   !  `created_at` datetime NOT NULL,   !  `updated_at` datetime NOT NULL,     PRIMARY KEY (`id`),     KEY `user_id` (`user_id`),     KEY `post_id` (`post_id`),   a  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE,   `  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON UPDATE CASCADE   T) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;   8/*!40101 SET character_set_client = @saved_cs_client */;5�_�                    9        ����                                                                                                                                                                                                                                                                                                                                                  V        `Zh�     �   9   K   L    �   9   :   L    5�_�                    +        ����                                                                                                                                                                                                                                                                                                                            +           8           V        `Zh�     �   *   +          DROP TABLE IF EXISTS `user`;   >/*!40101 SET @saved_cs_client     = @@character_set_client */;   //*!50503 SET character_set_client = utf8mb4 */;   CREATE TABLE `user` (   #  `id` int NOT NULL AUTO_INCREMENT,   #  `username` varchar(255) NOT NULL,      `email` varchar(255) NOT NULL,   #  `password` varchar(255) NOT NULL,   !  `created_at` datetime NOT NULL,   !  `updated_at` datetime NOT NULL,     PRIMARY KEY (`id`),     UNIQUE KEY `email` (`email`)   T) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;   8/*!40101 SET character_set_client = @saved_cs_client */;5�_�                            ����                                                                                                                                                                                                                                                                                                                            +           +           V        `Zh�     �         O    �         O    5�_�                            ����                                                                                                                                                                                                                                                                                                                            9           9           V        `Zh�     �                8/*!40101 SET character_set_client = @saved_cs_client */;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `Zh�     �                --   &-- Table structure for table `comment`   --5�_�                     4        ����                                                                                                                                                                                                                                                                                                                                                  V        `Zh�    �   4   8   Y    �   4   5   Y    5�_�      !               1        ����                                                                                                                                                                                                                                                                                                                            1           3           V        `Zh�     �   0   1          --   #-- Table structure for table `user`   --5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                            1           1           V        `Zh�     �         Y    �         Y    5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                            4           4           V        `Zh�    �         \    5�_�   "   $           #           ����                                                                                                                                                                                                                                                                                                                            5           5           V        `Zh�     �                 5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                            4           4           V        `Zh�     �                 5�_�   $               %   2        ����                                                                                                                                                                                                                                                                                                                            3           3           V        `Zh�    �   1   2           5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        `Zg�     �       7           �              �                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `Zg�     �              �                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `Zg�     �              �                <-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)   --   1-- Host: localhost    Database: just_tech_news_db   9-- ------------------------------------------------------   -- Server version   8.0.23       A/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;   C/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;   A/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;   /*!50503 SET NAMES utf8 */;   +/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;   #/*!40103 SET TIME_ZONE='+00:00' */;   D/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;   S/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;   K/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;   8/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;       --   &-- Table structure for table `comment`   --       DROP TABLE IF EXISTS `comment`;   >/*!40101 SET @saved_cs_client     = @@character_set_client */;   //*!50503 SET character_set_client = utf8mb4 */;   CREATE TABLE `comment` (     `id` �              �                #  `id` int NOT NULL AUTO_INCREMENT,     `comment_text` text NOT NULL,     `user_id` int DEFAULT NULL,     `post_id` int DEFAULT NULL,   !  `created_at` datetime NOT NULL,   !  `updated_at` datetime NOT NULL,     PRIMARY KEY (`id`),     KEY `user_id` (`user_id`),     KEY `post_id` (`post_id`),   a  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE,   `  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON UPDATE CASCADE   T) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;   8/*!40101 SET character_set_client = @saved_cs_client */;       --   #-- Table structure for table `post`   --       DROP TABLE IF EXISTS `post`;   >/*!40101 SET @saved_cs_client     = @@character_set_client */;   //*!50503 SET character_set_client = utf8mb4 */;   CREATE TABLE `post` (   #  `id` int NOT NULL AUTO_INCREMENT,      `title` varchar(255) NOT NULL,   #  `post_url` varchar(255) NOT NULL,     `user_id` int DEFAULT NULL,   !  `created_at` datetime NOT NULL,   !  `updated_at` datetime NOT NULL,     PRIMA�   7   8        �   6   8            PRIMARY KEY (`id`),     KEY `user_id` (`user_id`),   o  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE   T) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;   8/*!40101 SET character_set_client = @saved_cs_client */;       --   #-- Table structure for table `user`   --       DROP TABLE IF EXISTS `user`;   >/*!40101 SET @saved_cs_client     = @@character_set_client */;   //*!50503 SET character_set_client = utf8mb4 */;   CREATE TABLE `user` (   #  `id` int NOT NULL AUTO_INCREMENT,   #  `username` varchar(255) NOT NULL,      `email` varchar(255) NOT NULL,   #  `password` varchar(255) NOT NULL,   !  `created_at` datetime NOT NULL,   !  `updated_at` datetime NOT NULL,     PRIMARY KEY (`id`),     UNIQUE KEY `email` (`email`)   T) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;   8/*!40101 SET character_set_client = @saved_cs_client */;       --   #-- Table structure for table `vote`   --       DROP TABLE IF EXISTS `vote`;   )/*!40101 SET @saved_cs_client     = @@cha�   U   V        �   T   V          >/*!40101 SET @saved_cs_client     = @@character_set_client */;   //*!50503 SET character_set_client = utf8mb4 */;   CREATE TABLE `vote` (   #  `id` int NOT NULL AUTO_INCREMENT,     `user_id` int NOT NULL,     `post_id` int NOT NULL,     PRIMARY KEY (`id`),   A  UNIQUE KEY `vote_post_id_user_id_unique` (`user_id`,`post_id`),     KEY `post_id` (`post_id`),   p  CONSTRAINT `vote_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,   o  CONSTRAINT `vote_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE   T) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;   8/*!40101 SET character_set_client = @saved_cs_client */;   )/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;       '/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;   ;/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;   1/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;   ?/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;   A/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;   #/*!40101 SET COLLATION_CONNECTION=@�   i   j        �   h   j          ?/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;   )/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;       (-- Dump completed on 2021-03-23 17:52:215�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `Zg�     �               5�_�                             ����                                                                                                                                                                                                                                                                                                                                       a           V        `Zg�     �              5��